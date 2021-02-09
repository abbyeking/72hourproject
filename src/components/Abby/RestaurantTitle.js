import './RestaurantTitle.css';

const RestaurantTitle = ({name, id}) => {
    return (
        <div className = "main">
            <div key={id}>
                <div>{name}</div>
            </div>
        </div>
    );
};

export default RestaurantTitle;