
import './Category.scss'

function Category({ name, image }) {
    return (
        <div className='category-container'>
            <img
                className='background-image'
                style={{ backgroundImage: `url(${image})` }}
                alt=""
            />
            <div className='category-body-container'>
                <h2>{name}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default Category;