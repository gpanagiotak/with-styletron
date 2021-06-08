import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import Title from '../../components/items/title/title'
import Wrapper from '../../components/items/wrapper/wrapper'
import { Paragraph3, Paragraph4 } from 'baseui/typography'
import { Button, SIZE } from 'baseui/button'

const AcademicPartners = () => {
    const [css, theme] = useStyletron()

    return (
        <Wrapper marginTop={['120px']}>
            <Block
                className={css({ 'z-index': '90' })}
                display="block"
                position="relative"
            >
                <Title
                    bgTitle="ΠΑΡΕ ΠΙΣΤΟΠΟΙΗΣΗ"
                    mainTitle="Γνωστοί Ακαδημαϊκοί Συνεργάτες"
                />
            </Block>
            <Block maxWidth={['100%', '50%']}>
                <Block>
                    <img src="./acta.png" width="120" />
                    <img src="./elinp.png" width="200" />
                </Block>
                <Paragraph4>
                    Αυτή είναι μια ωραία γραμματοσειρά consectetur adipisicing
                    elit. Maxime mollitia, molestiae quas vel sint commodi
                    repudiandae consequuntur voluptatum laborum numquam
                    blanditiis harum quisquam eius sed odit fugiat iusto fuga
                    praesentium optio, eaque rerum
                </Paragraph4>
                <Button size={SIZE.compact}>Μάθε Περισσότερα</Button>
            </Block>
        </Wrapper>
    )
}

export default AcademicPartners
