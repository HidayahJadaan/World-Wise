import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import PropTypes from 'prop-types';
import Message from "./Message"

function CityList( { cities, isLoading }) {

  if (isLoading) return <Spinner />;

if(!cities.length) return <Message 
message="Add Your First City By Clicking On The City On The Map" />
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
  
export default CityList;
