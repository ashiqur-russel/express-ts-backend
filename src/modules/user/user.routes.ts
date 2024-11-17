import { Router } from 'express';
import { getAllUsers } from './user.controller';
import { AuthGuard } from '../../guard/auth.guard';
import { RoleGuard } from '../../guard/role.guard';

const router = Router();

router.get('/', AuthGuard, RoleGuard('admin'), getAllUsers);

export default router;
