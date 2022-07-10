export default function MyComponent(props) {
  return (
    <>
      <div className="div">
        <picture>
          <source
            srcset="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a"
            type="image/webp"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a"
            srcset="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F3350d087d76b46ec94a301258d9c4a5a"
            className="image"
          />
        </picture>
        <div className="builder-image-sizer image-sizer" />
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 68.89999999999999%;
          pointer-events: none;
          font-size: 0;
        }
      `}</style>
    </>
  );
}
