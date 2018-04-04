var NewComponent = React.createClass({
    render: function() {
      return (
  
        <form name="payssion_hosted_payment" action="http://sandbox.payssion.com/checkout/5f522cee9d2e995e" method="post">
          <input type="hidden" name="api_key" defaultValue="5963a4c1c35c2a8e" />
          <input type="hidden" name="api_sig" defaultValue="27a0309a01ed380e2c7fb9c6d383ff0a" />
          <input type="hidden" name="order_id" defaultValue={123} />
          <input type="hidden" name="payer_email" defaultValue="payer@example.com" />
          <input type="hidden" name="description" defaultValue="Charge for test" />
          <input type="hidden" name="amount" defaultValue={1.00} />
          <input type="hidden" name="currency" defaultValue="USD" />
          <input type="hidden" name="return_url" defaultValue="http://sandbox.payssion.com/demo/afterpayment" />
          <input type="submit" className="button" defaultValue="click here to try this hosted page demo" />
        </form>
      );
    }
  });