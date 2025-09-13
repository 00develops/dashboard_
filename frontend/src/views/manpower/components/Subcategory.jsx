import { Row } from 'react-bootstrap';
import ComponentCard from '@/components/ComponentCard';
import CustomChartJS from '@/components/CustomChartJS';
import {  LineController } from 'chart.js';
import { getBasicAreaChart} from '@/views/charts/data';
const Page = () => {
    return <Row>
    
            <ComponentCard title="Basic Area">
                <div className="mt-3" style={{
                    height: '300px'
                }}>
                    <CustomChartJS type="line" getOptions={getBasicAreaChart} plugins={[LineController]} style={{
                        maxHeight: '300px'
                    }} />
                </div>
                </ComponentCard>
       
 </Row>;
};
 export default Page;