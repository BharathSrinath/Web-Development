import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  // By default no modal component will be shown on the screen. This is based on the logic {showModal && modal}
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        {/* Clicking this button will open the modal */}
        Open Modal
      </Button>
      {showModal && modal}
     {/* Initially our customisation for modal was absolute for both inner and outer div elements so that one will appear over the other. But the issue with this is, when we place the button and the above statement at the end of the page, you will not see the modal from where the button was clicked. */}
     {/* This is because, absolute position with parent being static will always begin from top-left corner of the entire web-page and not from where we have clicked the button. To overcome this we change the positioning from absolute to fixed. */}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
    </div>
  );
}

export default ModalPage;
