import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";

export default function AlertMessage({
  isSuccess,
  isError,
  errorMessage,
  onClose
}) {
  return (
    <>
      {isSuccess && (
        <Alert
          message="제출 성공!"
          description="내용 검토 후 반영됩니다!"
          type="success"
          showIcon
          closable
          onClose={onClose}
        />
      )}
      {isError && (
        <Alert
          message="제출 실패!"
          description={errorMessage}
          type="error"
          showIcon
          closable
          onClose={onClose}
        />
      )}
    </>
  );
}

AlertMessage.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  onClose: PropTypes.func.isRequired
};
