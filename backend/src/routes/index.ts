import { Router } from 'express';
import VotingController from '../controllers';

const router = Router();
const votingController = new VotingController();

export function setRoutes(app) {
    app.use('/api/vote', router);
    router.post('/register', votingController.registerVoter.bind(votingController));
    router.post('/cast', votingController.castVote.bind(votingController));
}