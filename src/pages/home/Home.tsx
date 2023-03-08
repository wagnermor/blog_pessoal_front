import './Home.css';
import note from '../../assets/img/note.jpg';

function Home() {
  return (
    <div className='homeMain'>
      <div className="filha">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi earum obcaecati, inventore repellendus veritatis quo sequi facere ipsam! Consequatur aperiam, delectus voluptatem quam repellat ducimus quibusdam suscipit debitis unde repudiandae.</p>
        <img className='img_note' src={note} alt="Notebook" />
      </div>
    </div>
  );
}
export default Home;