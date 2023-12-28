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
        <div className="home-banner">
          <div className="clouds position-absolute"><img className="img-fluid" src="https://cms.dsafer.com/wp-content/themes/dsafer/src/templates/home/svg/clouds.svg" alt="clouds"/></div>
          <div className="tubes position-absolute"><img className="img-fluid" src="https://cms.dsafer.com/wp-content/themes/dsafer/src/templates/home/svg/tubes.svg" alt="tubes"/></div>
          <Container>
              <div className="text-center">
                <h1 className='hero'>{heroData.title}</h1>
                <p>{heroData.subtitle}</p> 
              </div>
          </Container>
          <Container>
            <div className="hero-main-img">
              <img src="https://cms.dsafer.com/wp-content/uploads/2023/08/Hero-Section-Pages-Graphic.png.webp" alt="Hero Image"/>
            </div>
          </Container>
        </div>
        <div className="wave">
          <img className="img-fluid" src="https://cms.dsafer.com/wp-content/themes/dsafer/src/templates/home/svg\wave.svg" alt="Wave"/>
        </div>
        <div className="section-why">
          <Container>
            <div className="web-row">
              <div className="why-txt col-2">
                <h2 className="heading-sec light-heading">Why DSafer?</h2>
                <p>We take care of securing your data, reducing your costs, risk and regulation, thus shortening the time to market (TTM)</p>
              </div>
              <div className="why-anime col-2"></div>
            </div>
            <div className="web-row step-row">
              <div className="why-step-box col-3">
                <img className="img-fluid" src="" alt="Step image"/>
                <h3 className="sub-head light-heading">Reduce Risk</h3>
                <p>Our system has been designed by data protection experts to protect your sensitive data. 
                We use advanced security tools, perform security scans, certify relevant standards, and much more.
                This is how we constantly improve and raise the security of our system.</p>
              </div>
              <div className="why-step-box col-3">
                <img className="img-fluid" src="" alt="Step image"/>
                <h3 className="sub-head light-heading">Reduce Cost</h3>
                <p>We put a lot of effort into improving the security of our system. 
                  We take on this responsibility, so your business will be able to save budget for improving your product, investing in marketing, or giving yourself any other opportunity you would prefer to invest in than engaging in your data security.</p>
              </div>
              <div className="why-step-box col-3">
                <img className="img-fluid" src="" alt="Step image"/>
                <h3 className="sub-head light-heading">Reduce Regulation & TTM</h3>
                <p>We are responsible for the data processed and stored in our service.
                  We help you simplify your system, and in addition, we also help you to save a lot of time and resources for complying with regulations such as PCI and GDPR, which shortens the processes required to enter the market.</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="section-solution gradient-sec same-space">
          <Container>
            <div className="sec-head text-center">
              <h2 className="large-head white-heading">
                Our solutions
              </h2>
              <p>We have expertise in storing and processing sensitive data. We have created the most efficient products in the market to help you manage your data simply and productively. Here are some of our solutions:</p>
            </div>
            <div className="web-row solution-row">
              <div className="solution-boxes col-3">
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2022/07/Group-399.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dCollector</h3>
                </div>
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2022/09/Next-Solution-3.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dVault</h3>
                  <p>Collect, secure, and store your end-user's sensitive data in our highly-standardized encoded vault.</p>
                </div>
              </div>
              <div className="solution-boxes col-3">
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2022/07/Group-402.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dEnrichment</h3>
                  <p>Enrich the information you hold about your customer by skipping and processing the user's personal data from various sources.</p>
                </div>
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2023/04/risk.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dRisk</h3>
                  <p>Get alerted and secured when suspicious activities are identified in your data.</p>
                </div>
              </div>
              <div className="solution-boxes col-3">
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2023/04/Next-Solution-1.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dDistributor</h3>
                </div>
                <div className="sol-box">
                  <img className="img-fluid" src="https://cms.dsafer.com/wp-content/uploads/2023/04/Next-Solution-2.svg" alt="Solution image"/>
                  <h3 className="sub-head light-heading">dBI</h3>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="cases-section gradient-sec same-space">
          <Container>
            <div className="sec-head text-center">
              <h2 className="large-head white-heading">
                Cases of use
              </h2>
            </div>
            <div className="web-row">
              <div className="cases-anime col-2"></div>
              <div className="cases-txt col-2">
                <h2 className="heading-sec light-heading">DVault</h2>
                <p>Store your sensitive data in our vault Our vault is designed to store sensitive data as a SAAS service. There are several ways to collect the data directly from you or your customers. 
                We secure and monitor our systems all the time, and use the most advanced tools on the market to store the data in the safest and most sophisticated way.</p>
                <a href="#" class="btn btn-link" target="">Discover all the features of DVault &gt;</a>
              </div>
            </div>
            <div className="web-row">
              <div className="cases-txt col-2">
                <h2 className="heading-sec light-heading">DMiddleware</h2>
                <p>Collect sensitive data directly from your customers Our tool collects sensitive data directly from your customers without sending any sensitive data through your servers. As a result, we virtually eliminate your need to protect sensitive data and be compliant with advanced security standards such as PCI. We do the “dirty” work for you. 
                Our system can also send the data to your providers as payment providers or view the data for you securely on our servers.</p>
                <a href="#" class="btn btn-link" target="">Discover all the features of DCollect or DReceiver &gt;</a>
              </div>
              <div className="cases-anime col-2"></div>
            </div>
          </Container>
        </div>
        <div className="trusted-solution gradient-sec same-space">
          <Container>
            <div className="sec-head text-center">
              <h2 className="large-head white-heading">
                Trusted By
              </h2>
              <h3 className="light-heading">1200+ Companies around the world, letting us secure their network</h3>
            </div>
            <div class="d-flex flex-wrap justify-content-between mt-5">
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/monday-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/Group-812.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/affirm-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/apolloio-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/paychex-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/tito-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/minioio-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/amazon_aws-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/Group-811.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/wireshark-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/okta-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/nodeping-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/ansible-ar21.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/g85.svg" alt="" /></div>
              <div class="logo my-5"><img src="https://cms.dsafer.com/wp-content/uploads/2023/06/Layer_2_1_.svg" alt="" /></div>
            </div>
          </Container>
        </div>
        <div className="designed-section gradient-sec same-space">
          <Container>
            <div className="web-row">
              <div className="designed-anime col-2"></div>
              <div className="designed-txt col-2">
                <h2 className="heading-sec light-heading">Designed for developers</h2>
                <h2 className="large-head white-heading">Our system is designed to simplify your environment</h2>
                <p>Our customers can integrate us in a few lines of code by sending a simple REST API request. Using our system saves you a lot of research and development time for compliance with standards like PCI and securing your system.</p>
                <div className='sec-btn'>
                  <a href="#" class="btn btn-outline-primary" target="">Go to our documentation &gt;</a>
                </div>
                <a href="#" class="btn btn-link" target="">Bug Bounty plan &gt;</a>
              </div>
            </div>
          </Container>
        </div>
        <div className="blog-section same-space">
          <Container>
            <div className="web-row">
              <div className="blog-txt col-2">
                <h2 className="heading-sec light-heading">Now on our blog</h2>
                <h2 className="large-head white-heading">“Dolorum commodi vero temporibus cupiditate incidunt quasi”</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className='sec-btn'>
                  <a href="Go To Article" class="btn btn-outline-primary" target="">Go To Article</a>
                </div>
                <a href="#" class="btn btn-link" target="">Discover more articles from our blog &gt;</a>
              </div>
              <div className="blog-anime col-2">
                <img src="https://cms.dsafer.com/wp-content/uploads/2022/08/942c0068-ecc1-3e01-82b9-fdfd9362f192.jpg" alt="Blog image" />
              </div>
            </div>
          </Container>
        </div>
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
