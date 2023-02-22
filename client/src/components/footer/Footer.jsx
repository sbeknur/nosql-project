import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Curtomer Service</li>
                    <li className="fListItem">Partner Help</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Sustainability</li>
                    <li className="fListItem">Press center</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Safety Resource Center</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms & conditions</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2023 kinotick.</div>
        </div>
    );
};

export default Footer;
