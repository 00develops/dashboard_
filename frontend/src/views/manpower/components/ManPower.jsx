import React from 'react';
import Category from './category';
import SubCategory from './Subcategory';
import {  Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap';



// If you want to use TabsJustified, export it or use it in your main component
const TabsJustified = () => {
    return (
        <>
            <h5 className="mb-2 pb-1  pt-2">Manpower </h5>
            <TabContainer defaultActiveKey="Category">
                <Nav className="nav-justified nav-tabs mb-3">
                    <NavItem>
                        <NavLink eventKey={'Category'} href="#Category1">
                            Category
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'SubCategory'} href="#SubCategory1">
                            Sub Category
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'FAQ'} href="#FAQ1">
                            FAQ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'Banners'} href="#Banners1">
                            Banners
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'PriceMapper'} href="#PriceMapper1">
                            Price Mapper
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent>
                    <TabPane eventKey={'Category'} id="Category1">
                        <Category />
                    </TabPane>
                    <TabPane eventKey={'SubCategory'} id="SubCategory1">
                       <SubCategory />
                    </TabPane>
                    <TabPane eventKey={'FAQ'} id="FAQ1">
                        <p className="mb-0">
                            Configure system preferences, theme options, and notification settings. Easily adapt the
                            platform to fit your workflow and preferences.
                        </p>
                    </TabPane>
                    <TabPane eventKey={'Banners'} id="Banners1">
                        <p className="mb-0">
                            View and manage all ongoing Banners, tasks, and milestones. Collaborate with your team and
                            track progress in real-time.
                        </p>
                    </TabPane>
                    <TabPane eventKey={'PriceMapper'} id="PriceMapper1">
                        <p className="mb-0">
                            Need help? Reach out to our Price Mapper team or browse the help center for common questions,
                            guides, and documentation.
                        </p>
                    </TabPane>
                </TabContent>
            </TabContainer>
        </>
    );
};

export default TabsJustified;
