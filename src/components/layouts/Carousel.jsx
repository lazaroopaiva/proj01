import { UncontrolledCarousel } from 'reactstrap';

export default function Carousel() {
  return (
    <UncontrolledCarousel
      items={[
        {
          altText: 'Slide 1',
          caption: 'Slide 1',
          key: 1,
          src: 'https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28312.jpg?w=900&t=st=1660145824~exp=1660146424~hmac=3a258576761eef1393ac6c172fe932dafbc88aff11b31f8b781cb78bfe686104',
        },
        {
          altText: 'Slide 2',
          caption: 'Slide 2',
          key: 2,
          src: 'https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28312.jpg?w=900&t=st=1660145824~exp=1660146424~hmac=3a258576761eef1393ac6c172fe932dafbc88aff11b31f8b781cb78bfe686104',
        },
        {
          altText: 'Slide 3',
          caption: 'Slide 3',
          key: 3,
          src: 'https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28312.jpg?w=900&t=st=1660145824~exp=1660146424~hmac=3a258576761eef1393ac6c172fe932dafbc88aff11b31f8b781cb78bfe686104',
        },
      ]}
    />
  );
}
