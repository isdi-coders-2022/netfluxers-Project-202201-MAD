import { useParams } from 'react-router-dom';
import { DetailsCast } from '../details-web/details-cast';
import { DetailsFeature } from '../details-web/details-feature';
import { DetailsTrailer } from '../details-web/details-trailer';

export function ContainerDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <DetailsFeature id={id} />
      <DetailsCast id={id} />
      <DetailsTrailer id={id} />
    </>
  );
}
