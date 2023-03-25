import categories from './Categories.json'
import './Categories.scss'

function Categories() {
    return (
        <div className='categories-container'>
            {categories.map(({ id, name, image }) => {
                return (
                    <div key={id} className='category-container'>
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
                )
            })}
        </div>
    );
}

export default Categories;