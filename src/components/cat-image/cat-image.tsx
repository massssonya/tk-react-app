import styled from "styled-components";

const ImageWrapper = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 400px;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f5f5f5 37%,
    #e0e0e0 63%
  );
  background-size: 400% 100%;
  animation: loading 1.4s ease infinite;

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export function CatImage({ catUrl }: { catUrl: string }) {
  return (
    <ImageWrapper>
      {catUrl ? (
        <StyledImage src={catUrl} alt="Cute cat" />
      ) : (
        <Skeleton />
      )}
    </ImageWrapper>
  );
}
