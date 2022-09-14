import { StyledColorPallete } from "./styles/ColorPallete.styled";
import { Container, Flex } from "./styles/Utils";

const ColorPallete = ({ themeColors, toggleThemeColor }) => {
    return (
        <StyledColorPallete>
            <Container>
                <Flex justifyContent="flex-end" columnGap="10px">
                    {themeColors.map(color => (
                        <div className="color" key={color} style={{backgroundColor: color}} onClick={() => toggleThemeColor(color)}></div>
                    ))}
                </Flex>
            </Container>
        </StyledColorPallete>
    );
}
 
export default ColorPallete;