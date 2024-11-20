import { Router } from 'express';
import { getAllUsers, deleteUser } from './user.controller';
import { AuthGuard } from '../../guard/auth.guard';
import { RoleGuard } from '../../guard/role.guard';

const router = Router();

router.get('/', AuthGuard, RoleGuard('student'), getAllUsers);
router.delete('/:id', AuthGuard, RoleGuard('student'), deleteUser);

export default router;
