import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Dropdown, InputGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IntFormControl } from '../Components/CustomFormControl';
import SlotIcon from '../Components/SlotIcon';
import { deepClone } from '../Util';
import Artifact from './Artifact';
import ArtifactCard from './ArtifactCard';
import { ArtifactSlotSData, ArtifactStarsData, ArtifactStatsData, ArtifactSubStatsData, ElementalData } from './ArtifactData';
import ArtifactDatabase from './ArtifactDatabase';
import ArtifactEditor from './ArtifactEditor';

export default class ArtifactDisplay extends React.Component {
  constructor(props) {
    super(props)
    ArtifactDatabase.populateDatebaseFromLocalStorage();
    this.state = {
      artIdList: [...ArtifactDatabase.getArtifactIdList()],
      artToEdit: null,
    }
    this.state = { ...this.state, ...ArtifactDisplay.initialFilter }
  }
  static initialFilter = {
    filterArtSetKey: "",
    filterStars: [3, 4, 5],
    filterLevelLow: 0,
    filterLevelHigh: 20,
    filterSlotKey: "",
    filterMainStatKey: "",
    filterSubstates: ["", "", "", ""]
  }
  addArtifact = (art) => {
    if (this.state.artToEdit && this.state.artToEdit.id === art.id) {
      ArtifactDatabase.updateArtifact(art);
      this.setState({ artToEdit: null }, this.forceUpdate)
    } else {
      let id = ArtifactDatabase.addArtifact(art)
      //add the new artifact at the beginning
      this.setState((state) => ({ artIdList: [id, ...state.artIdList,] }), this.forceUpdate)
    }
  }

  deleteArtifact = (id) => {
    ArtifactDatabase.removeArtifactById(id)
    this.setState((state) => {
      let artIdList = [...state.artIdList]
      artIdList.splice(artIdList.indexOf(id), 1)
      return { artIdList }
    });
  }
  editArtifact = (id) =>
    this.setState({ artToEdit: ArtifactDatabase.getArtifact(id) })

  cancelEditArtifact = () =>
    this.setState({ artToEdit: null })

  render() {
    let artifacts = this.state.artIdList.map(artid => ArtifactDatabase.getArtifact(artid)).filter((art) => {
      if (this.state.filterArtSetKey && this.state.filterArtSetKey !== art.setKey) return false;
      if (!this.state.filterStars.includes(art.numStars)) return false;
      if (art.level < this.state.filterLevelLow || art.level > this.state.filterLevelHigh) return false;
      if (this.state.filterSlotKey && this.state.filterSlotKey !== art.slotKey) return false
      if (this.state.filterMainStatKey && this.state.filterMainStatKey !== art.mainStatKey) return false
      for (const filterKey of this.state.filterSubstates)
        if (filterKey && !art.substats.some(substat => substat.key === filterKey)) return false;

      return true
    })
    let MainStatDropDownItem = (props) =>
      (<Dropdown.Item key={props.statKey} onClick={() => this.setState({ filterMainStatKey: props.statKey })} >
        {Artifact.getStatName(props.statKey)}
      </Dropdown.Item>)
    let dropdownitemsForStar = (star) =>
      Artifact.getArtifactSetsByMaxStarEntries(star).map(([key, setobj]) =>
        <Dropdown.Item key={key} onClick={() => this.setState({ filterArtSetKey: key })}>
          {setobj.name}
        </Dropdown.Item >)
    return (<Container className="mt-3">
      <Row className="mb-2 no-gutters"><Col>
        <ArtifactEditor
          artifactToEdit={this.state.artToEdit}
          addArtifact={this.addArtifact}
          cancelEdit={this.cancelEditArtifact}
        />
      </Col></Row>
      <Row className="mb-2"><Col>
        <Card bg="darkcontent" text="lightfont">
          <Card.Header>Artifact Filter</Card.Header>
          <Card.Body>
            <Row>
              {/* Artifact set filter */}
              <Col xs={12} lg={6} className="mb-2">
                <Dropdown as={InputGroup.Prepend} className="flex-grow-1">
                  <Dropdown.Toggle className="w-100">
                    {Artifact.getArtifactSetName(this.state.filterArtSetKey, "Artifact Set")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({ filterArtSetKey: "" })}>Unselect</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.ItemText>Max Rarity 🟊🟊🟊🟊🟊</Dropdown.ItemText>
                    {dropdownitemsForStar(5)}
                    <Dropdown.Divider />
                    <Dropdown.ItemText>Max Rarity 🟊🟊🟊🟊</Dropdown.ItemText>
                    {dropdownitemsForStar(4)}
                    <Dropdown.Divider />
                    <Dropdown.ItemText>Max Rarity 🟊🟊🟊</Dropdown.ItemText>
                    {dropdownitemsForStar(3)}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              {/* Artifact stars filter */}
              <Col xs={12} lg={6} className="mb-2">
                <ToggleButtonGroup className="w-100 d-flex" type="checkbox" as={InputGroup.Append} onChange={(e) => this.setState({ filterStars: e })} defaultValue={this.state.filterStars}>
                  {Object.keys(ArtifactStarsData).map(star => {
                    star = parseInt(star)
                    let selected = this.state.filterStars.includes(star)
                    return <ToggleButton key={star} value={star}><FontAwesomeIcon icon={selected ? faCheckSquare : faSquare} /> {"🟊".repeat(star)}</ToggleButton>
                  })}
                </ToggleButtonGroup>
              </Col>
              {/* Artiface level filter */}
              <Col xs={12} lg={6} className="mb-2">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Level Low/High (Inclusive)</InputGroup.Text>
                  </InputGroup.Prepend>
                  <IntFormControl
                    value={this.state.filterLevelLow}
                    placeholder={`Lowest Level to Filter`}
                    onValueChange={(val) => val >= 0 && val <= this.state.filterLevelHigh && this.setState({ filterLevelLow: val })}
                  />
                  <IntFormControl
                    value={this.state.filterLevelHigh}
                    placeholder={`Highest Level to Filter`}
                    onValueChange={(val) => val >= 0 && val >= this.state.filterLevelLow && this.setState({ filterLevelHigh: val })}
                  />
                </InputGroup>
              </Col>
              {/* Artifact Slot & Main Stat filter */}
              <Col xs={12} lg={6} className="mb-2">
                <Row>
                  <Col>
                    <Dropdown className="flex-grow-1">
                      <Dropdown.Toggle className="w-100">
                        {this.state.filterSlotKey ? (<span><FontAwesomeIcon icon={SlotIcon[this.state.filterSlotKey]} className="fa-fw mr-1" />{ArtifactSlotSData[this.state.filterSlotKey].name}</span>) : "Slot"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.setState({ filterSlotKey: "" })} >
                          Unselect
                        </Dropdown.Item>
                        {Object.keys(ArtifactSlotSData).map(key =>
                          <Dropdown.Item key={key} onClick={() => this.setState({ filterSlotKey: key })} >
                            <FontAwesomeIcon icon={SlotIcon[key]} className="fa-fw mr-1" />
                            {ArtifactSlotSData[key].name}
                          </Dropdown.Item>)}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Dropdown className="flex-grow-1">
                      <Dropdown.Toggle className="w-100">
                        {Artifact.getStatName(this.state.filterMainStatKey, "Main Stat")}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.setState({ filterMainStatKey: "" })}>Unselect</Dropdown.Item>
                        {Object.keys(ArtifactStatsData).filter(key => key !== "ele_dmg").map((statKey) => <MainStatDropDownItem key={statKey} statKey={statKey} />)}
                        {Object.keys(ElementalData).map((ele) => <MainStatDropDownItem key={ele} statKey={`${ele}_ele_dmg`} />)}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
              {/* substat filter */}
              {this.state.filterSubstates.map((substatKey, index) =>
                <Col key={index} xs={6} lg={3} className="mb-2">
                  <Dropdown >
                    <Dropdown.Toggle id="dropdown-basic" className="w-100">
                      {Artifact.getStatName(substatKey, `Substat ${index + 1}`)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          let filterSubstates = deepClone(this.state.filterSubstates)
                          filterSubstates[index] = ""
                          this.setState({ filterSubstates })
                        }}
                      >No Substat</Dropdown.Item>
                      {Object.keys(ArtifactSubStatsData).filter(key => !this.state.filterSubstates.includes(key)).map(key =>
                        <Dropdown.Item key={key}
                          onClick={() => {
                            let filterSubstates = deepClone(this.state.filterSubstates)
                            filterSubstates[index] = key
                            this.setState({ filterSubstates })
                          }}
                        >{Artifact.getStatName(key)}</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              )}
            </Row>
          </Card.Body>
        </Card>
      </Col></Row>
      <Row className="mb-2 no-gutters">
        {artifacts.map((art, index) =>
          <Col key={art.id} lg={4} md={6} className="mb-2 pl-1 pr-1">
            <ArtifactCard
              artifactData={art}
              onDelete={() => this.deleteArtifact(art.id)}
              onEdit={() => this.editArtifact(art.id)}
            />
          </Col>
        )}
      </Row>
    </Container >)
  }
}
