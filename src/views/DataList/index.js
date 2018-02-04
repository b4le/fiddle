import React from 'react';

import List from '../../components/List/index';
import ListItem from '../../components/ListItem/index'
import Loader from '../../components/Loader'
import { requestGhibliData } from './service';

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: null,
      currentDataset: null
    }
    // Bind functions
    this.requestGhibliData = requestGhibliData.bind(this);
  }

  renderData() {
    return this.state.currentDataset.map((dataset, key) => {
      return <ListItem data={dataset} key={key}/>
    })
  }

  componentDidMount() {
    this.requestGhibliData(this.props.match.path)
      .then(([data, type]) => {
        this.setState({
          'currentList': type,
          'currentDataset': data
        });
      });
  }

  render() {
    return(
      <List className="dataList">
        {this.state.currentDataset ? this.renderData() : <Loader/>}
      </List>
      )
  }
}

export default DataList;