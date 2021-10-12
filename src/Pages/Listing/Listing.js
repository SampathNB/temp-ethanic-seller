import React, { useState } from "react";
import { ButtonGroup, FormControl, InputGroup, Button, Dropdown, Badge, Form, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListingData } from "../../Data/ListingData";
import "./Listing.css";
export default function Listing() {
    const [ListState, setListStateShow] = useState(false);
    const handleListState = () => {
        setListStateShow(!ListState);
    };
    return (
        <>
            <div data-region="alert-bar">
                <div class="container-fluid">
                    <div class="row mt-2 mt-md-4 px-4">
                        <div class="col-12">
                            <div class="alert border">
                                <div class="alert-message text-center">
                                    Your shop is on holiday. <a className="link-gray" href="/your/shops/me/vacation">Manage Settings</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listings-manager-layout inner-page-region">
                <div className="page-view">
                    <div class="page-heading">
                        <header class="pt-2 mb-2 mb-lg-4 pb-2 border-bottom bg-white d-flex">
                            <div className="container-fluid px-4">
                                <div className="row">
                                    <div className="col-6">
                                        <h1>Listings</h1>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex justify-content-end">
                                            <InputGroup className="header-search">
                                                <InputGroup.Text className="bg-transparent px-1 text-lightest-gray" id="basic-addon1">
                                                    <svg fill="currentcolor" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>
                                                </InputGroup.Text>
                                                <FormControl
                                                    className="border-start-0 ps-0"
                                                    placeholder="Search by title, tag, or SKU"
                                                />
                                            </InputGroup>
                                            <div className="ms-2 ps-1">
                                                <Link to="#" className="btn btn-primary">
                                                    <svg className="btn-icn" width="24px" height="24px" fill="currentcolor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7A1,1,0,0,0,20,11Z"></path></svg>
                                                    <span class="d-none d-sm-inline">Add a listing</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="page-body">
                        <div className="container-fluid px-4">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <div className="row">
                                    <div className="col-xxl-10 col-lg-9">
                                        <div className="d-flex mb-2 pb-1">
                                            <ButtonGroup aria-label="Basic example">
                                                <Button variant="secondary">Activate</Button>
                                                <Button variant="secondary">Delete</Button>
                                            </ButtonGroup>
                                            <Dropdown className="ms-2">
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    Editing Options
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-1">Edit titles</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-2">Edit tags</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Edit descriptions</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Edit prices</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Edit personalisation</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Change production partners</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Change renewal options</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Change delivery profiles</Dropdown.Item>
                                                    <Dropdown.Item className="btn list-nav-item" href="#/action-3">Change section</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second">
                                                <div className="list-row">
                                                    {ListingData.map((data, key) => {
                                                        return (
                                                            <div class="card">
                                                                <div class="d-flex">
                                                                    <div class="flex-shrink-0 list-row-img">
                                                                        <img alt="" src={data.img} />
                                                                    </div>
                                                                    <div class="flex-grow-1 ms-3">
                                                                        <div class="card-meta-row mb-2">
                                                                            <h2 class="card-meta-row-item strong selected-color card-title">{data.title}</h2><Badge bg="none">Video</Badge>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-5 col-sm-6 col-md-3 col-lg-6 col-xl-3 text-gray-lighter">
                                                                                <span data-value="">{data.instock}</span>
                                                                                <span class="text-body-smaller">
                                                                                    in stock
                                                                                </span>
                                                                            </div>
                                                                            <div class="col-5 col-sm-6 col-md-3 col-lg-6 col-xl-3 text-gray-lighter">
                                                                                <span class="currency-symbol">US$</span> <span class="currency-value">{data.price}</span>
                                                                            </div>
                                                                            <div class="col-5 col-sm-6 col-md-3 col-lg-6 col-xl-3 text-gray-lighter">
                                                                                <span data-value="" title="142">{data.num}</span>
                                                                            </div>
                                                                            <div class="col-5 col-sm-6 col-md-3 col-lg-6 col-xl-3 text-gray-lighter">
                                                                                <span class="text-red tooltip-top-right" data-tooltip="Please resolve the issues with your account">
                                                                                    {data.deaticate}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        {ListState ? (
                                                                            <>
                                                                                <hr class="mt-2 mb-2 mt-md-3 mb-md-3" />
                                                                                <a href="/your/shops/Gemexa/stats/listing/969565649?ref=listings_manager_inline_stats" class="row text-link-secondary">
                                                                                    <div class="col-12 col-md-5 mb-3 selected-color">
                                                                                        <h6 class="mb-xs-2">
                                                                                            Last 30 days
                                                                                        </h6>
                                                                                        <div class="row">
                                                                                            <div class="col-6 text-body-smaller text-gray-lighter selected-color">
                                                                                                {data.visits} <br /> visits
                                                                                            </div>
                                                                                            <div class="col-6 text-body-smaller text-gray-lighter selected-color">
                                                                                                {data.favourites} <br /> favourites
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-xs-12 col-md-7 pl-md-0 selected-color">
                                                                                        <h6 class="mb-2">
                                                                                            All time
                                                                                        </h6>
                                                                                        <div class="row">
                                                                                            <div class="col-4 text-body-smaller text-gray-lighter selected-color">
                                                                                                {data.sales} <br /> sales
                                                                                            </div>
                                                                                            <div class="col-4 text-body-smaller text-gray-lighter selected-color">
                                                                                                <span class="currency-symbol">US$</span> <span class="currency-value">{data.revenue}</span><br /> revenue
                                                                                            </div>
                                                                                            <div class="col-4 text-body-smaller text-gray-lighter">
                                                                                                {data.renewalsCount} <br /> renewal
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </>
                                                                        ) : null}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="first">
                                                <div className="list-grid">
                                                    {ListingData.map((data, key) => {
                                                        return (
                                                            <div class="card">
                                                                <a href="#" class="card-body" data-edit="">
                                                                    <div class="card-img-wrap">
                                                                        <img alt="" src={data.img} />
                                                                        <div class="position-absolute bottom-0 start-0 ms-1">
                                                                            <div class="display-block mb-1">
                                                                                <Badge bg="none">Video</Badge>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-meta">
                                                                        <div class="card-meta-row">
                                                                            <h2 class="card-meta-row-item strong selected-color card-title">{data.title}</h2>
                                                                        </div>
                                                                        <div class="card-meta-row">
                                                                            <div class="card-meta-row-item selected-color text-gray-lighter">
                                                                                <span class="text-red tooltip-top-right" data-tooltip="Please resolve the issues with your account">
                                                                                    {data.deaticate}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="card-meta-row">
                                                                            <div class="card-meta-row-item card-meta-row-sku selected-color text-gray-lighter">
                                                                                <span data-value="" title="106">{data.num}</span>                    </div>
                                                                        </div>
                                                                        <div class="card-meta-row">
                                                                            <div class="card-meta-row-item card-meta-row-quantity selected-color text-gray-lighter">
                                                                                {data.instock} in stock
                                                                            </div>
                                                                            <div class="card-meta-row-item card-meta-row-price text-gray-lighter selected-color">
                                                                                <span class="currency-symbol">US$</span> <span class="currency-value">{data.price}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="card-meta-row card-meta-row-status text-gray-lighter">
                                                                            {data.exprire}
                                                                        </div>
                                                                    </div>
                                                                    {ListState ? (
                                                                        <div class="card-meta">
                                                                            <div class="card-meta-row">
                                                                                <h6 class="selected-color mb-0">
                                                                                    Last 30 days
                                                                                </h6>
                                                                            </div>
                                                                            <div class="card-meta-row mb-2">
                                                                                <div class="card-meta-row-item text-gray-lighter selected-color">
                                                                                    {data.visits} visits
                                                                                </div>
                                                                                <div class="card-meta-row-item text-gray-lighter selected-color">
                                                                                    {data.favourites} favourites
                                                                                </div>
                                                                            </div>
                                                                            <div class="card-meta-row">
                                                                                <h6 class="selected-color mb-0">
                                                                                    All time
                                                                                </h6>
                                                                            </div>
                                                                            <div class="card-meta-row">
                                                                                <div class="card-meta-row-item text-gray-lighter selected-color">
                                                                                    {data.sales} sales
                                                                                </div>
                                                                                <div class="card-meta-row-item text-gray-lighter selected-color">
                                                                                    <span class="currency-symbol">US$</span> <span class="currency-value">{data.revenue}</span> revenue
                                                                                </div>
                                                                            </div>
                                                                            <div class="card-meta-row">
                                                                                <div class="card-meta-row-item text-gray-lighter selected-color">
                                                                                    {data.renewalsCount} renewals
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ) : null}
                                                                </a>
                                                                <div className="card-actions card-actions-2">
                                                                    <div className="card-action text-center">
                                                                        <label class="checkbox-custom d-inline-block" >
                                                                            <input name="featured_only" type="checkbox" value="is_featured" class="checkbox" />
                                                                            <span class="checkbox-label"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="card-action">
                                                                        <Dropdown className="ms-2">
                                                                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                                                                <svg width="18px" height="18px" fill="currentcolor" viewBox="4 4 16 16" aria-hidden="true" focusable="false"><path d="M17.957,12.692a5.61,5.61,0,0,0,0-1.376l1.24-1.2A1,1,0,0,0,19.37,8.9L18.382,7.184a1,1,0,0,0-1.141-.463l-1.66.473a5.985,5.985,0,0,0-1.2-.7L13.96,4.824a1,1,0,0,0-.97-0.758H11.01a1,1,0,0,0-.97.758L9.623,6.491a5.981,5.981,0,0,0-1.2.7L6.765,6.714a1,1,0,0,0-1.142.462L4.633,8.892A1,1,0,0,0,4.8,10.11l1.239,1.2a5.61,5.61,0,0,0,0,1.376l-1.24,1.2A1,1,0,0,0,4.63,15.1l0.988,1.717a1,1,0,0,0,.866.5,1.022,1.022,0,0,0,.274-0.038l1.66-.473a5.985,5.985,0,0,0,1.2.7l0.417,1.667a1,1,0,0,0,.97.758h1.98a1,1,0,0,0,.97-0.758l0.417-1.667a5.981,5.981,0,0,0,1.2-.7l1.661,0.475a1.034,1.034,0,0,0,.275.038,1,1,0,0,0,.866-0.5l0.99-1.716A1,1,0,0,0,19.2,13.89ZM12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"></path></svg>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu align="end">
                                                                                <Dropdown.Item className="btn list-nav-item" href="#/action-1">Edit</Dropdown.Item>
                                                                                <Dropdown.Item className="btn list-nav-item" href="#/action-2">Delete</Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <ButtonGroup className="mt-3 ms-4">
                                            <Button variant="secondary">
                                                <svg width="18px" height="18px" fill="currentcolor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
                                            </Button>
                                            <Button variant="secondary">1</Button>
                                            <Button variant="secondary">2</Button>
                                            <Button variant="secondary">3</Button>
                                            <Button variant="secondary">
                                                <svg width="18px" height="18px" fill="currentcolor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path></svg>
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                    <div className="col-lg-3 col-xxl-2">
                                        <div className="mb-3">
                                            <Button className="w-100 justify-content-center" variant="secondary">Quick edit</Button>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                            <div className="">
                                                <label for="switch-stats" class="strong">Stats</label>
                                                <Form.Check
                                                    onClick={handleListState}
                                                    type="switch"
                                                    id="switch-stats"
                                                />
                                            </div>
                                            <Nav variant="pills" className="listing-tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="btn" eventKey="first">
                                                        <svg width="24px" height="24px" fill="currentcolor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="7" height="7"></rect><rect x="13" y="4" width="7" height="7"></rect><rect x="4" y="13" width="7" height="7"></rect><rect x="13" y="13" width="7" height="7"></rect></svg>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="btn" eventKey="second">
                                                        <svg width="24px" height="24px" fill="currentcolor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,6H4A1,1,0,1,1,4,4H20A1,1,0,0,1,20,6Z"></path><path d="M20,13H4a1,1,0,0,1,0-2H20A1,1,0,0,1,20,13Z"></path><path d="M20,20H4a1,1,0,0,1,0-2H20A1,1,0,0,1,20,20Z"></path></svg>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        <div className="mb-3">
                                            <label for="switch-stats" class="strong mb-1">Sort</label>
                                            <div className="select-wrap mb-4">
                                                <select class="select select-custom" id="sort-select">
                                                    <optgroup label="Select a sort order">
                                                        <option data-announce="Listings have been sorted by title from a to z" value="title_sort:ascending">
                                                            Title: A to Z
                                                        </option>
                                                        <option data-announce="Listings have been sorted by title from z to a" value="title_sort:descending">
                                                            Title: Z to A
                                                        </option>
                                                        <option data-announce="Listings have been sorted by stock from low to high" value="quantity:ascending">
                                                            Stock: low to high
                                                        </option>
                                                        <option data-announce="Listings have been sorted by stock from high to low" value="quantity:descending">
                                                            Stock: high to low
                                                        </option>
                                                        <option data-announce="Listings have been sorted by price from low to high" value="price:ascending">
                                                            Price: low to high
                                                        </option>
                                                        <option data-announce="Listings have been sorted by price from high to low" value="price:descending">
                                                            Price: high to low
                                                        </option>
                                                        <option data-announce="Listings have been sorted by expiration with soonest first" value="ending_date:ascending">
                                                            Expiration: soonest first
                                                        </option>
                                                        <option selected="selected" data-announce="Listings have been sorted by expiration with latest first" value="ending_date:descending">
                                                            Expiration: latest first
                                                        </option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label class="strong mb-2 d-block">Sort</label>
                                            <label class="radio-custom mb-2">
                                                <input name="item_status" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Active
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-2">
                                                <input name="item_status" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Draft
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-2">
                                                <input name="item_status" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Expired
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-2">
                                                <input name="item_status" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Sold Out
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-3">
                                                <input name="item_status" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Inactive
                                                </span>
                                            </label>
                                            <label class="checkbox-custom mb-1">
                                                <input name="featured_only" type="checkbox" value="is_featured" class="checkbox" />
                                                <span class="checkbox-label">
                                                    Featured listings
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label class="strong mb-2 d-block">Listing videos</label>
                                            <label class="radio-custom mb-2">
                                                <input name="listing_video" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    All
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-2">
                                                <input name="listing_video" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    With video
                                                </span>
                                            </label>
                                            <label class="radio-custom mb-2">
                                                <input name="listing_video" type="radio" value="inactive" class="radio" checked />
                                                <span title="Show only inactive listings" class="radio-label ps-1">
                                                    Without Video
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label class="strong mb-2 d-block">Selections</label>
                                            <div class="select-wrap mt-1 mb-1">
                                                <select title="Show listings in a specific section" data-section-option="" class="select select-custom">
                                                    <optgroup label="Sections">
                                                        <option value="">All</option>
                                                        <option value="33125990" disabled="">Slim &amp; Minimal Rings (0)</option>
                                                        <option value="33144155" disabled="">Diamond Rings (0)</option>
                                                        <option value="33144159" disabled="">Bracelets (0)</option>
                                                        <option value="33144165" disabled="">Necklace (0)</option>
                                                        <option value="0">No Section (0)</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <div className="d-flex mb-2 justify-content-between">
                                                <label class="strong d-inlne-block">Delivery profiles</label>
                                                <a href="#" class="text-link-secondary text-gray-lighter text-smaller">Manage</a>
                                            </div>
                                            <div class="select-wrap mt-1 mb-3">
                                                <select data-shipping-profile-select="" class="select select-custom" title="Show listings with a specific delivery profile">
                                                    <optgroup label="Delivery profiles">
                                                        <option value="">All</option>
                                                        <option data-shipping-profile-option="" value="138217850185" disabled="">Aramex (0)</option>
                                                        <option data-shipping-profile-option="" value="0">
                                                            No Delivery Profile (0)
                                                        </option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <h5>Production partners</h5>
                                            <div className="mt-2 mb-3">
                                                <a href="#" class="text-link-secondary text-link-underline">Add production partner</a>
                                            </div>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label class="strong d-inlne-block">Tags</label>
                                            <div class="select-wrap mt-1 mb-3">
                                                <select data-shipping-profile-select="" class="select select-custom" title="Show listings with a specific delivery profile">
                                                    <optgroup label="Delivery profiles">
                                                        <option value="">All</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Container>
                        </div>
                    </div>
                    <div className="page-footer"></div>
                </div>
            </div>
        </>
    );
}
