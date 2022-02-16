import { DetailsCast } from '../details-web/details-cast';
import { DetailsFeature } from '../details-web/details-feature';
import { DetailsTrailer } from '../details-web/details-trailer';

export function ContainerDetails() {
  return (
    <>
      <DetailsFeature />
      <DetailsCast />
      <DetailsTrailer />
    </>
  );
}
