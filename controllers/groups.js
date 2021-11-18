const Group = require('../models/Group');
const asyncHandler = require('../middleware/async');

exports.getGroups = asyncHandler(async (req, res, next) => {
  const groups = await Group.find();

  res.status(200).json({ success: true, data: groups });
});

exports.getGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findById(req.params.id);

  res.status(200).json({ success: true, data: group });
});

exports.createGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findOne({ name: req.body.name });

  if (group) {
    return res.status(400).json({ success: false, data: null });
  }

  const newGroup = await Group.create(req.body);

  res.status(200).json({ success: true, data: newGroup });
});

exports.updateGroup = asyncHandler(async (req, res, next) => {
  let group = await Group.findById(req.params.id);

  if (!group) {
    return res.status(404).json({ success: false, data: 'Server Error' });
  }

  bootcamp = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: bootcamp });
});

exports.deleteGroup = asyncHandler(async (req, res, next) => {
  const group = await Group.findById(req.params.id);

  if (!group) {
    return res
      .status(404)
      .json({
        success: false,
        message: `No Group found with the id ${req.params.id}`,
      });
  }

  await group.remove();

  res
    .status(200)
    .json({ success: true, data: {} });
});
