import React from 'react';
import Category from './category';
import SubCategory from './Subcategory';
import Faq from './Faq';
import Banner from './Banner';
import PriceMapper from './PriceMapper';
import ComponentCard from '@/components/ComponentCard';
import { CardHeader, Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap';



// If you want to use TabsJustified, export it or use it in your main component
const TabsJustified = () => {
    return <card>
        <ComponentCard className="mt-4" title="Manage Manpower" isCollapsible>
            
            <TabContainer defaultActiveKey="Category" >
                <Nav className="nav-justified nav-tabs mb-3">
                    <NavItem>
                        <NavLink eventKey={'Category'} href="#Category">
                            Category
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'SubCategory'} href="#SubCategory">
                            Sub Category
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'FAQ'} href="#FAQ">
                            FAQ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'Banners'} href="#Banners">
                            Banners
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={'PriceMapper'} href="#PriceMapper">
                            Price Mapper
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent>
                    <TabPane eventKey={'Category'} id="Category">
                        <Category className="card" />
                    </TabPane>
                    <TabPane eventKey={'SubCategory'} id="SubCategory">
                        <SubCategory />
                    </TabPane>
                    <TabPane eventKey={'FAQ'} id="FAQ">
                        <Faq />
                    </TabPane>
                    <TabPane eventKey={'Banners'} id="Banners">
                        <Banner />
                    </TabPane>
                    <TabPane eventKey={'PriceMapper'} id="PriceMapper">
                        <PriceMapper />
                    </TabPane>
                </TabContent>
            </TabContainer>
        </ComponentCard>
    </card>;
    
};

        export default TabsJustified;
