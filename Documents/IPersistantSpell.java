//Add an IPersistantSpell interface
//has:

package com.himself12794.usefulthings.spells;

import net.minecraft.world.World;
import net.minecraft.entity.EntityLivingBase;

public interface IPersistantSpell {
	/**
	 * Called every update that the spell is in effect on the target.
	 *
	 * {@param} caster the entity that cast the spell
	 * {@param} target that the spell is affecting
	 * {@return} whether or not to cancel the effect early
	 *
	 */
	boolean onUpdate(World world, EntityLivingBase caster, EntityLivingBase target, int timeLeft);
	
	/**
	 * How long the effect should last.
	 */
	int effectDuration();
}