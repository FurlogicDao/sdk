const logicService = require("../services/logicService");

exports.processData = async (req, res) => {
  try {
    const result = await logicService.process(req.body);
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
