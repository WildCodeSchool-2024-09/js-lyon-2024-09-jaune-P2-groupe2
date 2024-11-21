import { useLocation } from "react-router-dom";

interface FetchArt {
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  country: string;
  artistBeginDate: string;
  artistEndDate: string;
  medium: string;
  creditLine: string;
  geographyType: string;
  city: string;
}

function Article() {
  const location = useLocation();
  const artDetails = location.state as FetchArt;

  if (!artDetails) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <img src={artDetails.primaryImageSmall} alt={artDetails.title} />
      <h1>{artDetails.title}</h1>
      <h2>Artist: {artDetails.artistDisplayName}</h2>
      <h3>Description</h3>
      <p>
        Artist {artDetails.artistDisplayName} born in{" "}
        {artDetails.artistBeginDate} and died in {artDetails.artistEndDate}. The
        materials used for this work of art are {artDetails.medium}. The place
        of origin is {artDetails.creditLine}.{artDetails.geographyType}{" "}
        {artDetails.city} {artDetails.country}{" "}
      </p>

      <p>Pays : {artDetails.country}</p>
    </div>
  );
}

export default Article;
