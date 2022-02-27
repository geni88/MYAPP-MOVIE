import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
 color: green;
 background-color: silver;
 width: 500px;
 height: 700px;
 float: left;
`;
const StyledSummary = styled.summary`
color: black;
width: 450px

`

function Movie({ id, title, rating, year, genres, image, summary }) {

    return (
        <StyledDiv>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>

            <div>평점: {rating}</div>
            <div>출시년도: {year}년</div>
            <img src={image} alt={title} />
            <ul>
                {genres && genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
            <StyledSummary>{summary.length < 50 ? summary : `${summary.slice(0, 150)}......`}</StyledSummary>
        </StyledDiv>
    )
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;