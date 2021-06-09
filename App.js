function getPhotoFromId(photoId) {
  return `https://picsum.photos/id/${photoId}/200/200`;
}

const PHOTO_LIST_URL = "https://picsum.photos/list";
const { useState, useEffect } = React;

const App = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
    console.log("Hello from Mount");
  }, []);

  return (
    <React.Fragment>
      <header>
        <h1>Photo Wall</h1>
        <p>
          {/* TODO: <button onClick={clickHandler}>Click me to see the state update!</button> */}
        </p>
      </header>

      <div className="collage">
        {/* We use map below because Array.prototype.map is an expression,
           and for loops are not. JSX will only be able to interperet Javascript expressions
           when being used inside of curly braces.
           */}

        {photos.map((photo) => (
          <img
            alt={photo.filename}
            key={photo.id}
            src={getPhotoFromId(photo.id)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
