import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Backend from '../../classes/Backend';

import './style.scss';

import Loading from '../../components/Loading';
import TabContainer from '../../components/TabContainer';
import BOLogo from '../../components/Elements/BOLogo';
import Icon from '../../components/Elements/Icon';

class Info extends Component {
    state = {
        media: null,
    };

    constructor(props) {
        super(props);

        Backend.get(props.match.params.key).then((data) => {
            this.setState({ media: data.response });
            props.setBackground && props.setBackground(data.response.thumbnail);
        });
    }

    render() {
        let content = this.state.media;
        if (!content) return <Loading />;

        let date = new Date(content.date);
        let year = date.getFullYear();
        let { title, age, type, genre } = content;

        let renderedType;
        let renderSeasons = false;
        switch (type) {
            case 'movies':
                renderedType = 'Film';
                break;
            case 'series':
                renderedType = 'Serie';
                renderSeasons = true;
                break;
            default:
                renderedType = 'NaN';
        }

        return (
            <div id={'info-container'}>
                <Helmet>
                    <title>
                        Bergflix - {renderedType} - {title}
                    </title>
                    <meta name={'description'} content={`Bergflix Startseite. Neuerscheinung: ${title}`} />
                </Helmet>
                <img className={'logo'} src={this.state.media.logo} alt={'Element Logo'} onError={(e) => (e.target.outerHTML = `<p class="logo">${title}</p>`)} />
                <div className={'info'}>
                    <span>{year}</span>
                    <span>{age}+</span>
                    <span>{renderedType}</span>
                    <span />
                    <span>{genre}</span>
                </div>
                <div className={'info-2'}>
                    <BOLogo />
                    {/*TODO: Make an if statement*/}
                </div>
                <div className={'description'}>{this.state.media.description}</div>
                <div className={'controls'}>
                    <Link to={`/watch/${this.state.media.id}`}>
                        <Icon type={'play'} />
                        <span>Abspielen</span>
                    </Link>
                </div>
                {renderSeasons && (
                    <div className={'seasons'}>
                        <TabContainer>
                            <div label="Staffel 1"> Test 1 </div>
                            <div label="Staffel 2"> Test 2 </div>
                        </TabContainer>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Info);
