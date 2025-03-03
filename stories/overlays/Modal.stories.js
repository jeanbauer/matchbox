import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Modal, Panel, Button, Grid } from '@sparkpost/matchbox';

class ModalDemo extends React.Component {
  state = {
    open: false
  }

  handleChange = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <a onClick={this.handleChange} href="javascript:void(0);" role="button" data-test="open-modal">
          Open modal
        </a>

        <Modal open={this.state.open} onClose={this.handleChange} showCloseButton={true}>
          <Panel title="Delete Template" sectioned accent>
            <p>Are you sure you want to delete your template?</p>

            <Button style={{ marginRight: '1rem' }} primary onClick={this.handleChange} data-test="delete-button">Delete</Button>

            <Button onClick={this.handleChange} data-test="cancel-button">Cancel</Button>
          </Panel>
        </Modal>
      </div>
    )
  }
};

export default storiesOf('Overlays|Modal', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Open', () => {
    return (
      <Modal open>
        <Panel title="Delete Template" sectioned accent>
          <p>Are you sure you want to delete your template?</p>
          <Button style={{ marginRight: '1rem' }} primary>Delete</Button>
          <Button>Cancel</Button>
        </Panel>
      </Modal>
    )
  })

  .add('Toggle Example', withInfo({
    source: false,
    propTables: [Modal],
    propTablesExclude: [ModalDemo]
  })(() => {
    return (
      <ModalDemo />
    )
  }));
