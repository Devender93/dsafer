import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';


export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  const { data: newQueryData } = useQuery(NEW_QUERY);
  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const heroData = newQueryData?.page?.home?.hero ?? {};
  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
        <div className="clouds position-absolute"><img className="img-fluid" src="https://cms.dsafer.com/wp-content/themes/dsafer/src/templates/home/svg/clouds.svg" alt="clouds"/></div>
      <div className="tubes position-absolute"><img className="img-fluid" src="https://cms.dsafer.com/wp-content/themes/dsafer/src/templates/home/svg/tubes.svg" alt="tubes"/></div>
          <div className="text-center">
            <div className='hero'>{heroData.title}</div>
            <p>{heroData.subtitle}</p>
          </div>
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
const NEW_QUERY = gql`
  query {
    page(id: "9", idType: DATABASE_ID) {
      home {
        hero {
          subtitle
          title
          animation {
            left {
              node {
                link
              }
            }
            right {
              node {
                link
              }
            }
            scroll {
              node {
                link
              }
            }
          }
        }
      }
    }
  }
`;
