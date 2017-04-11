<?php
/**
 * @package   Externaldisclaimer
 * @type      Plugin (System)
 * @version   1.0.0
 * @author    Simon Champion
 * @copyright (C) 2016 Simon Champion
 * @license   GNU/GPLv2 http://www.gnu.org/licenses/gpl-2.0.html
**/

defined('_JEXEC') or die;

class plgSystemExternaldisclaimer extends JPlugin
{
	public function onBeforeCompileHead()
    {
        $app = JFactory::getApplication();
        if ($app->isAdmin()) {
            return;
        }

        $args = json_encode($this->params->toArray());
        $doc = JFactory::getDocument();
        $doc->addScript(JUri::root().'media/plg_system_externaldisclaimer/js/externalDisclaimer.js');
        $doc->addScriptDeclaration("externalDisclaimer(jQuery,{$args});");
    }
}
