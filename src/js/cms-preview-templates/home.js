import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return<div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="mb4 mw6">{entry.getIn(["data", "intro", "text"])}</p>
          </div>
        </div>


        <div className="bg-grey-1 pv4">
            <div className="ph3 mw7 center">

                <div className="flex-l mhn2-l">
                    <div className="w-40-l ph2-l">
                        <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "short_tech", "title"])}</h2>

                        <p>{entry.getIn(["data", "short_tech", "text"])}</p>
                    </div>

                    <div className="w-60-l ph2-l">
                        <img src={entry.getIn(["data", "short_tech", "title"])} alt="" className="mb3"></img>
                    </div>
                </div>

            </div>
        </div>

        <div className="bg-grey-1 pv4">
            <div className="ph3 mw7 center">

                <div className="flex-l mhn2-l">
                    <div className="w-40-l ph2-l">
                        <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "short_env", "title"])}</h2>

                        <p>{entry.getIn(["data", "short_env", "text"])}</p>
                    </div>

                    <div className="w-60-l ph2-l">
                        <img src={entry.getIn(["data", "short_env", "title"])} alt="" className="mb3"></img>
                    </div>
                </div>

            </div>
        </div>

        <div className="bg-grey-1 pv4">
            <div className="ph3 mw7 center">

                <div className="flex-l mhn2-l">
                    <div className="w-40-l ph2-l">
                        <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "short_cul", "title"])}</h2>

                        <p>{entry.getIn(["data", "short_cul", "text"])}</p>
                    </div>

                    <div className="w-60-l ph2-l">
                        <img src={entry.getIn(["data", "short_cul", "title"])} alt="" className="mb3"></img>
                    </div>
                </div>

            </div>
        </div>

        <div className="bg-grey-1 pv4">
            <div className="ph3 mw7 center">

                <div className="flex-l mhn2-l">
                    <div className="w-40-l ph2-l">
                        <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "short_health", "title"])}</h2>

                        <p>{entry.getIn(["data", "short_health", "text"])}</p>
                    </div>

                    <div className="w-60-l ph2-l">
                        <img src={entry.getIn(["data", "short_health", "title"])} alt="" className="mb3"></img>
                    </div>
                </div>

            </div>
        </div>



    </div>

  }
}