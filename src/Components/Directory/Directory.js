import Category from '../Category/Category';
import './Directory.scss';

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map(({ id, name, image }) => {
                return (
                    <Category key={id} name={name} image={image} />
                );
            })};
        </div>
    );
}

export default Directory;