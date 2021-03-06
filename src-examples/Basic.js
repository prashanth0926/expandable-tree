import React, { Component } from 'react';
import ExpandableTree from '../dist/main.js';
import '../dist/style.css';

export default class extends Component {
    constructor (){
        super();

        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Parent A'
                },
                {
                    id: 2,
                    name: 'Parent B',
                    isExpanded: true,
                    isChecked: true,
                    children: [
                        {
                            id: 21,
                            name: 'Child 1',
                            children: [
                                {
                                    id: 5,
                                    name: "Grand Child"
                                }
                            ]
                        },
                        {
                            id: 22,
                            name: 'Child 2'
                        },
                        {
                            id: 23,
                            name: 'Child 3'
                        },
                        {
                            id: 24,
                            name: 'Child 4'
                        }
                    ]
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <h2>Basic</h2>
                <hr/>
                <div className="row">
                    <div className="col-xs-12 col-lg-8 col-md-8">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <ExpandableTree
                                    data={ this.state.data }
                                    onUpdateCb={(updatedData)=>{
                                        this.setState({data: updatedData})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <h5>Source code:</h5>
                <pre>
{`this.state = {
  data: [
    {
      id: 1,
      name: 'Parent A'
    },
    {
      id: 2,
      name: 'Parent B',
      isExpanded: true,
      isChecked: true,
      children: [
        {
          id: 21,
          name: 'Child 1',
          children: [
            {
              id: 5,
              name: "Grand Child"
            }
          ]
        },
        {
          id: 22,
          name: 'Child 2'
        },
        {
          id: 23,
          name: 'Child 3'
        },
        {
          id: 24,
          name: 'Child 4'
        }
      ]
    }
  ]
}

<ExpandableTree
    data={ this.state.data }
    onUpdateCb={(updatedData)=>{
        this.setState({data: updatedData})
    }}
/>`}
                </pre>
            </div>
        )
    }
}
