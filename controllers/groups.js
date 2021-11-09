exports.getGroups = (req, res) => {
  return res.status(200).json({ success: true, data: `Get all groups` });
};

exports.getGroup = (req, res) => {
  return res
    .status(200)
    .json({ success: true, data: `Get group with id: ${req.params.id}` });
};

exports.createGroup = (req, res) => {
  return res.status(200).json({ success: true, data: `Create group` });
};

exports.updateGroup = (req, res) => {
  return res
    .status(200)
    .json({ success: true, data: `Update group with id: ${req.params.id}` });
};

exports.deleteGroup = (req, res) => {
  return res
    .status(200)
    .json({ success: true, data: `Delete group with id: ${req.params.id}` });
};
