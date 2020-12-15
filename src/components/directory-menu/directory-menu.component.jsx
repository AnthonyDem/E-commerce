import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory-menu.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
        return (
            <div className="directory-menu">
                {sections.map(
                    section => <MenuItem key={section.id} imageUrl={section.imageUrl}
                                         size={section.size} title={section.title} linkUrl={section.linkUrl}/>
                        )}
            </div>
        )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
