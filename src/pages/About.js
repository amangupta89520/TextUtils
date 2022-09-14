import { Container } from "../components/styles/Utils";
import { StyledAbout } from "../components/styles/StyledAbout";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        document.title = 'TextUtils | About';
    });

    return (
        <Container>
            <StyledAbout>
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque eius accusantium ullam nesciunt, numquam iure quam voluptates omnis assumenda cum deserunt fugiat ab quasi eaque atque minus, natus tempore reprehenderit magnam architecto modi non? Ea totam veniam fuga ad eveniet, voluptatibus doloremque repellat nostrum non. Dolore suscipit quae explicabo minima voluptate ut quas ab impedit, adipisci assumenda dolores amet laborum quo autem facere iusto nesciunt maxime iure. Adipisci harum, accusamus eligendi reprehenderit ut magni fuga quaerat! Exercitationem delectus perferendis atque rerum dolores, eligendi maxime. Ullam, quaerat, architecto veniam at delectus nihil sint sit, voluptate id nesciunt provident ab ea.</p>
            </StyledAbout>
        </Container>
    );
}
 
export default About;