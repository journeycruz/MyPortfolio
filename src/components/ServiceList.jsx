import React ,{ Component }from "react";
import { FiSmartphone, FiHardDrive, FiDatabase, FiCloud, FiCheckSquare, FiDollarSign } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiSmartphone />,
        title: 'Mobile First Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiHardDrive />,
        title: 'API Creation & Integration',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiDatabase />,
        title: 'Database Design',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiCloud />,
        title: 'Cloud Integration',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiCheckSquare />,
        title: 'Software Testing',
        description: 'Lets squash those bugs and get your software ready for production.'
    },
    {
        icon: <FiDollarSign />,
        title: 'E-commerce',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },

]


class ServiceThree extends Component{
    render(){
        const { column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
