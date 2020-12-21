import React from "react";
import format from "date-fns/format";

export default class Quiz extends React.Component {
    render() {
        const {entry, widgetFor, getAsset} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        return<div className="mw6 center ph3 pv4">
            <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
            <p>{ entry.getIn(["data", "description"]) }</p>
            { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }

            <button id="check_answer" className="btn w-100 w-auto-ns raise">Check answers!</button>

            { widgetFor("body") }
        </div>
    }
}
