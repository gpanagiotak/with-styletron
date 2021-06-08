import { Block } from "baseui/block";
import { StatefulTooltip, PLACEMENT } from "baseui/tooltip";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { useStyletron } from "baseui";
import { useRouter } from "next/router";

const Header = ({ currentTheme, toggleTheme }) => {
  const [css, theme] = useStyletron();
  const { locale } = useRouter();
  return (
    <Block
      padding={["10px 20px", "15px"]}
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      display="flex"
      overrides={{
        Block: {
          style: ({ $theme }) => {
            return {
              borderBottom: `1px solid ${$theme.colors.logo1}`,
            };
          },
        },
      }}
    >
      <Block display="flex" alignItems="center">
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                marginRight: "8px",
                color: "#fff",
                backgroundColor: $theme.colors.accentColor,
              }),
            },
          }}
          className={locale === "el" ? "active_lang" : ""}
          $as="a"
          href="/el"
          shape={SHAPE.circle}
          size={SIZE.compact}
        >
          ΕΛ
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                marginRight: "8px",
              }),
            },
          }}
          className={locale === "en" ? "active_lang" : ""}
          $as="a"
          href="/en"
          shape={SHAPE.circle}
          size={SIZE.compact}
        >
          EN
        </Button>
        <StatefulTooltip
          content={() => <Block>{currentTheme.customTexts.dimText}</Block>}
          placement={PLACEMENT.bottomRight}
          returnFocus
          autoFocus
        >
          <Button
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  marginRight: "8px",
                  backgroundColor: "transparent",
                  color: $theme.colors.mainColor,
                }),
              },
            }}
            className={css({
              ":hover": {
                color: "#fff",
              },
            })}
            onClick={toggleTheme}
            size={SIZE.compact}
            shape={SHAPE.circle}
            title="Toggle theme"
          >
            change
          </Button>
        </StatefulTooltip>
      </Block>
    </Block>
  );
};

export default Header;
