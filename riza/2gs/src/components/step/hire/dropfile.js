import React from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'semantic-ui-react'

class DropFile extends React.Component {
    constructor() {
      super()
      this.state = { files: [] }
    }
  
    onDrop(files) {
      this.setState({
        files
      });
    }
  
    render() {
      return (
        <section className='drop-file'>
          <h3>Got any attachments? (Max. 10MB)</h3>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)} className='no-border'>
              <Icon name='cloud upload' />
            </Dropzone>
          </div>
          <aside>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
          
        </section>
      );
    }
  }
  
  <DropFile />

  export default DropFile;