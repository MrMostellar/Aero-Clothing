import Directory from '../Components/Directory/Directory';
import categories from '../Components/Category/Categories.json';

function App() {

  return (

    <Directory categories={categories} />

  );
}

export default App;
