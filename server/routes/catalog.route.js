import express from 'express';
import catalogCtrl from '../controllers/catalog.ctrl';

const router = express.Router();

router.route('/import').post(catalogCtrl.import)

export default router;