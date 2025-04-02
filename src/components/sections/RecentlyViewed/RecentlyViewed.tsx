import { useData } from "../../../data/DataContext"
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
    const { recentlyViewed } = useData();

    if (recentlyViewed.length === 0) return null;

    return (
        <div className="recently-viewed">
            <h3>Recently Viewed Countries: </h3>
            <div className="flags-container">
                {recentlyViewed.map((country) => (
                    <Link key={country.name} to={`/${country.name.toLowerCase()}`} className="flag-link">
                        <img src={country.flag} alt={`Flag of ${country.name}`} className="flag-img" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
