import { Block } from 'baseui/block'
import Wrapper from '../../src/components/items/wrapper/wrapper'
import { Paragraph1 } from 'baseui/typography'
const Staff = () => {
    return (
        <Wrapper>
            <Paragraph1>This is the Studies section</Paragraph1>

            <Block display="flex" flexDirection="row">
                <Block width={['100%', '50%']} margin={['0', '7px']}>
                    <img src="https://picsum.photos/1200/800?random=1" />
                </Block>
                <Block width={['100%', '50%']} margin={['0', '7px']}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    <br />
                    <br />
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                    <br />
                    <br />
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                    <br />
                    <br />
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                    <br />
                    <br />
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum
                </Block>
            </Block>
        </Wrapper>
    )
}

export default Staff
