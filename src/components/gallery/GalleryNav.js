import React, { useState } from "react";

const GalleryNav = ({ setGalleryList }) => {
  const [Allactive, setAllActive] = useState(true);
  const [buildingActive, setBuildingActive] = useState(false);
  const [paintingActive, setPaintingActive] = useState(false);
  const [kitchenActive, setKitchenActive] = useState(false);
  const [interiorActive, setInteriorActive] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [plumbingActive, setPlumbingActive] = useState(false);
  const [stoneActive, setStoneActive] = useState(false);
  const [decoActive, setDecoActive] = useState(false);

  return (
    <div style={{
      width: '100vw',
      height: 'maxContent',
      overflowX: 'scroll',
    }}>
    <nav className="gallery-nav" style={{overflowX: 'scroll !important'}}>
      <ul style={{overflowX: 'scroll !important'}}>
        <li
          onClick={() => {
            setAllActive(true);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setStoneActive(false);
            setDecoActive(false);
            setGalleryList("all");
          }}
          className={!Allactive ? "links" : "active-link"}
        >
          All
        </li>
        <li
          onClick={() => {
            setBuildingActive(true);
            setAllActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("building");
          }}
          className={!buildingActive ? "links" : "active-link"}
        >
          Building Works
        </li>
        <li
          onClick={() => {
            setPaintingActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("painting");
          }}
          className={!paintingActive ? "links" : "active-link"}
        >
          Paintings
        </li>
        <li
          onClick={() => {
            setStoneActive(true)
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setGalleryList("stone");
          }}
          className={!stoneActive ? "links" : "active-link"}
        >
          Stone Design
        </li>
        <li
          onClick={() => {
            setKitchenActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("kitchen");
          }}
          className={!kitchenActive ? "links" : "active-link"}
        >
          Kitchen setup and Tile Settings
        </li>
        <li
          onClick={() => {
            setInteriorActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setCurtainActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("interior");
          }}
          className={!interiorActive ? "links" : "active-link"}
        >
          Interior Designs
        </li>
        <li
          onClick={() => {
            setCurtainActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setPlumbingActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("curtain");
          }}
          className={!curtainActive ? "links" : "active-link"}
        >
          Curtains
        </li>
        <li
          onClick={() => {
            setPlumbingActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setDecoActive(false);
            setStoneActive(false);
            setGalleryList("plumbing");
          }}
          className={!plumbingActive ? "links" : "active-link"}
        >
          Plumbing Materials
        </li>
        <li
          onClick={() => {
            setDecoActive(true);
            setAllActive(false);
            setBuildingActive(false);
            setPaintingActive(false);
            setKitchenActive(false);
            setInteriorActive(false);
            setCurtainActive(false);
            setStoneActive(false);
            setPlumbingActive(false);
            setGalleryList("deco");
          }}
          className={!decoActive ? "links" : "active-link"}
        >
          Deco
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default GalleryNav;
