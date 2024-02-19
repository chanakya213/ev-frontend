import { ContentBox, FooterBox } from "./footer.styled";

function Footer() {
  return (
    <FooterBox>
      <ContentBox>VAOW ENERGY All rights reserved vaow.in @{new Date().getFullYear()}</ContentBox>
    </FooterBox>
  );
}

export default Footer;
